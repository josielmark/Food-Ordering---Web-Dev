exports.getProducts = (req, res, next) => {
    res.status(200).json({
        success: true,
        messase: 'This route will show all products in database.'
    })
}