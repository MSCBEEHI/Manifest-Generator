function uuidv4() {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c => (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16));
}
function getManifest(name, description) {
    const bp = JSON.stringify({
        "format_version": 2,
        "header": {
            "name": name,
            "description": description,
            "uuid": uuidv4(),
            "version": [
                1,
                0,
                0
            ],
            "min_engine_version": [
                1,
                19,
                50
            ]
        },
        "modules": [
            {
                "type": "script",
                "language": "javascript",
                "uuid": uuidv4(),
                "entry": "scripts/Main.js",
                "version": [
                    1,
                    0,
                    0
                ]
            }
        ],
        "dependencies": [
            {
                "module_name": "@minecraft/server",
                "version": "1.1.0-beta"
            },
            {
                "module_name": "@minecraft/server-gametest",
                "version": "1.0.0-beta"
            },
            {
                "module_name": "@minecraft/server-ui",
                "version": "1.0.0-beta"
            }
        ]
    });
    const rp = JSON.stringify({
        "format_version": 1,
        "header": {
            "name": name,
            "description": description,
            "uuid": uuidv4(),
            "version": [
                0,
                0,
                1
            ],
            "min_engine_version": [
                1,
                8,
                0
            ]
        },
        "modules": [
            {
                "type": "resources",
                "uuid": uuidv4(),
                "version": [
                    0,
                    0,
                    1
                ]
            }
        ],
        "dependencies": [
            {
                "uuid": uuidv4(),
                "version": [
                    0,
                    0,
                    1
                ]
            }
        ]
    })
    return { bp, rp }
}
window.onload = () => {
    let name = prompt('name');
    let description = prompt('description');
    document.getElementById('resultbp').innerHTML = getManifest(name, description).bp;
    document.getElementById('resultrp').innerHTML = getManifest(name, description).rp;
};
