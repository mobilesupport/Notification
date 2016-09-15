cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-sqlite-evcore-extbuild-free/www/SQLitePlugin.js",
        "id": "cordova-sqlite-evcore-extbuild-free.SQLitePlugin",
        "pluginId": "cordova-sqlite-evcore-extbuild-free",
        "clobbers": [
            "SQLitePlugin"
        ]
    },
    {
        "file": "plugins/cordova-sqlite-storage/www/SQLitePlugin.js",
        "id": "cordova-sqlite-storage.SQLitePlugin",
        "pluginId": "cordova-sqlite-storage",
        "clobbers": [
            "SQLitePlugin"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-sqlite-evcore-extbuild-free": "0.8.1",
    "cordova-sqlite-storage": "1.4.7"
}
// BOTTOM OF METADATA
});