module.exports = (app, upload) => {

    const uploadRecipeImageForRecipe = async (req, res) => {
        res.json({file: req.file})
    }

    const findImageByID = (req, res) => {
        const filename = req.params.filename

        // gfs.files.findOne({filename: filename}, (err, file) => {
        //     if (!file || file.length === 0) {
        //         res.send(400);
        //     }
        //
        //     return res.json(file);
        // });
    }

    app.post('/api/internal/upload', upload.single('image'), uploadRecipeImageForRecipe)
    //app.get('/api/internal/images/:filename', findImageByID)
}