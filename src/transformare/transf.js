import Transformare from "./domain/transformare";

var cloudinary = require('cloudinary').v2;
cloudinary.config({
    cloud_name: 'dtasbjnnbhtswu',
    api_key: '5248449nkjk',
    api_secret: 'Z33lKVzr4ggvkBq9LlIGFY0oixgPpeA'
});

cloudinary.uploader.upload("C:\\Users\\User\\Desktop\\download.jpg", function (error, result) {
    Transformare.create(new Transformare({
            "id": 11,
            "id_antrenor": 1,
            "id_client": 1,
            "scop": 1,
            "kilograme": 23,
            "inainte": result.url,
            "dupa": result.url
        }), (err, tr) => {
            console.log(tr, err);

        }
    )
});
