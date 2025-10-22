/*don't modify please 🙏*/
const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const fs = require('fs-extra');
const moment = require('moment-timezone');

class VeronicaDB {
    constructor() {
        this.dbPath = path.join(__dirname, '../VeroData/database.sqlite');
        this.db = null;
        this.init();
    }

    init() {
        try {

            fs.ensureDirSync(path.dirname(this.dbPath));
            
            this.db = new sqlite3.Database(this.dbPath, (err) => {
                if (err) {
                    console.error('❌ Database connection error:', err.message);
                    return;
                }
                console.log('✅ Connected to Veronica Lite database');
                this.createTables();
            });
        } catch (error) {
            console.error('❌ Database initialization error:', error.message);
        }
    }

    createTables() {
        // Users table
        this.db.run(`CREATE TABLE IF NOT EXISTS users (
            user_jid TEXT PRIMARY KEY,
            name TEXT,
            pushname TEXT,
            is_premium INTEGER DEFAULT 0,
            is_banned INTEGER DEFAULT 0,
            ban_reason TEXT,
            banned_by TEXT,
            ban_date TEXT,
            command_count INTEGER DEFAULT 0,
            last_active TEXT,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
        )`);

        // Groups table
        this.db.run(`CREATE TABLE IF NOT EXISTS groups (
            group_jid TEXT PRIMARY KEY,
            name TEXT,
            subject TEXT,
            owner TEXT,
            participant_count INTEGER DEFAULT 0,
            welcome_enabled INTEGER DEFAULT 1,
            goodbye_enabled INTEGER DEFAULT 1,
            antilink_enabled INTEGER DEFAULT 0,
            antitag_enabled INTEGER DEFAULT 0,
            antidelete_enabled INTEGER DEFAULT 0,
            max_warn INTEGER DEFAULT 3,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
        )`);

        // Group participants table
        this.db.run(`CREATE TABLE IF NOT EXISTS group_participants (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            group_jid TEXT,
            user_jid TEXT,
            is_admin INTEGER DEFAULT 0,
            is_owner INTEGER DEFAULT 0,
            warn_count INTEGER DEFAULT 0,
            joined_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (group_jid) REFERENCES groups (group_jid),
            UNIQUE(group_jid, user_jid)
        )`);

        // Banned users table
        this.db.run(`CREATE TABLE IF NOT EXISTS banned_users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_jid TEXT UNIQUE,
            reason TEXT,
            banned_by TEXT,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP
        )`);

        // Sudo users table
        this.db.run(`CREATE TABLE IF NOT EXISTS sudo_users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_jid TEXT UNIQUE,
            added_by TEXT,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP
        )`);

        // Chat analytics table
        this.db.run(`CREATE TABLE IF NOT EXISTS chat_analytics (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            chat_jid TEXT,
            message_count INTEGER DEFAULT 0,
            command_count INTEGER DEFAULT 0,
            media_count INTEGER DEFAULT 0,
            last_activity DATETIME DEFAULT CURRENT_TIMESTAMP,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP
        )`);

        // Command stats table
        this.db.run(`CREATE TABLE IF NOT EXISTS command_stats (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            command_name TEXT,
            usage_count INTEGER DEFAULT 0,
            last_used DATETIME DEFAULT CURRENT_TIMESTAMP,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP
        )`);

        console.log('✅ Database tables initialized');
    }

    // ========== USER MANAGEMENT ==========

    async updateUserStats(userJid, incrementCommand = false) {
        return new Promise((resolve, reject) => {
            const now = moment().format('YYYY-MM-DD HH:mm:ss');
            
            this.db.run(`INSERT OR REPLACE INTO users (user_jid, command_count, last_active, updated_at)
                VALUES (?, COALESCE((SELECT command_count FROM users WHERE user_jid = ?), 0) + ?, ?, ?)`,
                [userJid, userJid, incrementCommand ? 1 : 0, now, now],
                function(err) {
                    if (err) reject(err);
                    else resolve(this);
                }
            );
        });
    }

    async getUser(userJid) {
        return new Promise((resolve, reject) => {
            this.db.get(`SELECT * FROM users WHERE user_jid = ?`, [userJid], (err, row) => {
                if (err) reject(err);
                else resolve(row);
            });
        });
    }

    async isUserBanned(userJid) {
        return new Promise((resolve, reject) => {
            this.db.get(`SELECT * FROM banned_users WHERE user_jid = ?`, [userJid], (err, row) => {
                if (err) reject(err);
                else resolve(!!row);
            });
        });
    }

    async banUser(userJid, bannedBy, reason = 'No reason provided') {
        return new Promise((resolve, reject) => {
            const now = moment().format('YYYY-MM-DD HH:mm:ss');
            
            this.db.run(`INSERT OR REPLACE INTO banned_users (user_jid, reason, banned_by, created_at)
                VALUES (?, ?, ?, ?)`,
                [userJid, reason, bannedBy, now],
                function(err) {
                    if (err) reject(err);
                    else resolve(this);
                }
            );
        });
    }

    async unbanUser(userJid) {
        return new Promise((resolve, reject) => {
            this.db.run(`DELETE FROM banned_users WHERE user_jid = ?`, [userJid], function(err) {
                if (err) reject(err);
                else resolve(this);
            });
        });
    }

    async getBannedUsers() {
        return new Promise((resolve, reject) => {
            this.db.all(`SELECT * FROM banned_users ORDER BY created_at DESC`, (err, rows) => {
                if (err) reject(err);
                else resolve(rows);
            });
        });
    }

    // ========== SUDO USERS MANAGEMENT ==========

    async addSudoUser(userJid, addedBy) {
        return new Promise((resolve, reject) => {
            this.db.run(`INSERT OR REPLACE INTO sudo_users (user_jid, added_by) VALUES (?, ?)`,
                [userJid, addedBy],
                function(err) {
                    if (err) reject(err);
                    else resolve(this);
                }
            );
        });
    }

    async removeSudoUser(userJid) {
        return new Promise((resolve, reject) => {
            this.db.run(`DELETE FROM sudo_users WHERE user_jid = ?`, [userJid], function(err) {
                if (err) reject(err);
                else resolve(this);
            });
        });
    }

    async getSudoUsers() {
        return new Promise((resolve, reject) => {
            this.db.all(`SELECT * FROM sudo_users ORDER BY created_at DESC`, (err, rows) => {
                if (err) reject(err);
                else resolve(rows);
            });
        });
    }

    async isSudoUser(userJid) {
        return new Promise((resolve, reject) => {
            this.db.get(`SELECT * FROM sudo_users WHERE user_jid = ?`, [userJid], (err, row) => {
                if (err) reject(err);
                else resolve(!!row);
            });
        });
    }

    // ========== GROUP MANAGEMENT ==========

    async ensureGroupSettings(groupJid) {
        return new Promise((resolve, reject) => {
            this.db.run(`INSERT OR IGNORE INTO groups (group_jid) VALUES (?)`, [groupJid], function(err) {
                if (err) reject(err);
                else resolve(this);
            });
        });
    }

    async getGroupSetting(groupJid) {
        return new Promise((resolve, reject) => {
            this.db.get(`SELECT * FROM groups WHERE group_jid = ?`, [groupJid], (err, row) => {
                if (err) reject(err);
                else resolve(row);
            });
        });
    }

    async updateGroupSetting(groupJid, settings) {
        return new Promise((resolve, reject) => {
            const now = moment().format('YYYY-MM-DD HH:mm:ss');
            let query = `UPDATE groups SET updated_at = ?`;
            let params = [now];
            
            if (settings.welcome !== undefined) {
                query += `, welcome_enabled = ?`;
                params.push(settings.welcome ? 1 : 0);
            }
            if (settings.goodbye !== undefined) {
                query += `, goodbye_enabled = ?`;
                params.push(settings.goodbye ? 1 : 0);
            }
            if (settings.antilink !== undefined) {
                query += `, antilink_enabled = ?`;
                params.push(settings.antilink ? 1 : 0);
            }
            if (settings.antitag !== undefined) {
                query += `, antitag_enabled = ?`;
                params.push(settings.antitag ? 1 : 0);
            }
            if (settings.antidelete !== undefined) {
                query += `, antidelete_enabled = ?`;
                params.push(settings.antidelete ? 1 : 0);
            }
            if (settings.max_warn !== undefined) {
                query += `, max_warn = ?`;
                params.push(settings.max_warn);
            }
            
            query += ` WHERE group_jid = ?`;
            params.push(groupJid);
            
            this.db.run(query, params, function(err) {
                if (err) reject(err);
                else resolve(this);
            });
        });
    }

    async updateGroupMetadata(groupJid, metadata) {
        return new Promise((resolve, reject) => {
            const now = moment().format('YYYY-MM-DD HH:mm:ss');
            
            this.db.run(`INSERT OR REPLACE INTO groups 
                (group_jid, name, subject, owner, participant_count, updated_at) 
                VALUES (?, ?, ?, ?, ?, ?)`,
                [groupJid, metadata.name, metadata.subject, metadata.owner, 
                 metadata.participant_count || 0, now],
                function(err) {
                    if (err) reject(err);
                    else resolve(this);
                }
            );
        });
    }

    async updateGroupParticipant(groupJid, userJid, isAdmin = false, isOwner = false) {
        return new Promise((resolve, reject) => {
            this.db.run(`INSERT OR REPLACE INTO group_participants 
                (group_jid, user_jid, is_admin, is_owner) 
                VALUES (?, ?, ?, ?)`,
                [groupJid, userJid, isAdmin ? 1 : 0, isOwner ? 1 : 0],
                function(err) {
                    if (err) reject(err);
                    else resolve(this);
                }
            );
        });
    }

    async removeGroupParticipant(groupJid, userJid) {
        return new Promise((resolve, reject) => {
            this.db.run(`DELETE FROM group_participants WHERE group_jid = ? AND user_jid = ?`,
                [groupJid, userJid],
                function(err) {
                    if (err) reject(err);
                    else resolve(this);
                }
            );
        });
    }

    async getGroupParticipants(groupJid) {
        return new Promise((resolve, reject) => {
            this.db.all(`SELECT * FROM group_participants WHERE group_jid = ?`, [groupJid], (err, rows) => {
                if (err) reject(err);
                else resolve(rows);
            });
        });
    }

    async getGroupAdmins(groupJid) {
        return new Promise((resolve, reject) => {
            this.db.all(`SELECT user_jid FROM group_participants WHERE group_jid = ? AND is_admin = 1`, 
                [groupJid], (err, rows) => {
                if (err) reject(err);
                else resolve(rows.map(row => row.user_jid));
            });
        });
    }

    // ========== CHAT ANALYTICS ==========

    async updateChatAnalytics(chatJid, incrementCommand = false) {
        return new Promise((resolve, reject) => {
            const now = moment().format('YYYY-MM-DD HH:mm:ss');
            
            this.db.run(`INSERT OR REPLACE INTO chat_analytics 
                (chat_jid, message_count, command_count, last_activity) 
                VALUES (?, COALESCE((SELECT message_count FROM chat_analytics WHERE chat_jid = ?), 0) + 1, 
                COALESCE((SELECT command_count FROM chat_analytics WHERE chat_jid = ?), 0) + ?, ?)`,
                [chatJid, chatJid, chatJid, incrementCommand ? 1 : 0, now],
                function(err) {
                    if (err) reject(err);
                    else resolve(this);
                }
            );
        });
    }

    async getChatAnalytics(chatJid) {
        return new Promise((resolve, reject) => {
            this.db.get(`SELECT * FROM chat_analytics WHERE chat_jid = ?`, [chatJid], (err, row) => {
                if (err) reject(err);
                else resolve(row);
            });
        });
    }

    // ========== COMMAND STATISTICS ==========

    async updateCommandStats(commandName) {
        return new Promise((resolve, reject) => {
            const now = moment().format('YYYY-MM-DD HH:mm:ss');
            
            this.db.run(`INSERT OR REPLACE INTO command_stats 
                (command_name, usage_count, last_used) 
                VALUES (?, COALESCE((SELECT usage_count FROM command_stats WHERE command_name = ?), 0) + 1, ?)`,
                [commandName, commandName, now],
                function(err) {
                    if (err) reject(err);
                    else resolve(this);
                }
            );
        });
    }

    async getTopCommands(limit = 10) {
        return new Promise((resolve, reject) => {
            this.db.all(`SELECT * FROM command_stats ORDER BY usage_count DESC LIMIT ?`, 
                [limit], (err, rows) => {
                if (err) reject(err);
                else resolve(rows);
            });
        });
    }

    // ========== MAINTENANCE METHODS ==========

    async backupDatabase() {
        const backupPath = path.join(__dirname, '../VeroData/backup_' + 
            moment().format('YYYY-MM-DD_HH-mm-ss') + '.sqlite');
        
        return new Promise((resolve, reject) => {
            this.db.run(`VACUUM INTO ?`, [backupPath], function(err) {
                if (err) reject(err);
                else resolve(backupPath);
            });
        });
    }

    async cleanupOldData(days = 30) {
        const cutoffDate = moment().subtract(days, 'days').format('YYYY-MM-DD HH:mm:ss');
        
        return new Promise((resolve, reject) => {
            this.db.run(`DELETE FROM chat_analytics WHERE last_activity < ?`, [cutoffDate], function(err) {
                if (err) reject(err);
                else resolve(this.changes);
            });
        });
    }

    async getDatabaseStats() {
        return new Promise((resolve, reject) => {
            const stats = {};
            
            // Get counts for all tables
            const tables = ['users', 'groups', 'group_participants', 'banned_users', 'sudo_users', 'chat_analytics', 'command_stats'];
            let completed = 0;
            
            tables.forEach(table => {
                this.db.get(`SELECT COUNT(*) as count FROM ${table}`, (err, row) => {
                    if (!err) stats[table] = row.count;
                    completed++;
                    
                    if (completed === tables.length) {
                        resolve(stats);
                    }
                });
            });
        });
    }

    // Close database connection
    close() {
        if (this.db) {
            this.db.close((err) => {
                if (err) {
                    console.error('❌ Database close error:', err.message);
                } else {
                    console.log('✅ Database connection closed');
                }
            });
        }
    }
}

// Create singleton instance
const veronicaDB = new VeronicaDB();

// Handle graceful shutdown
process.on('SIGINT', () => {
    console.log('\n🔄 Closing database connection...');
    veronicaDB.close();
    process.exit(0);
});

process.on('SIGTERM', () => {
    console.log('\n🔄 Closing database connection...');
    veronicaDB.close();
    process.exit(0);
});

module.exports = veronicaDB;