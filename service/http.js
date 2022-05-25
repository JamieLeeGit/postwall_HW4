const http = {
    successHandle(req, res, data){
        console.log(data);
        res.send(data);
        res.end();
    },
    errorHandle(req, res){        
        res.status(400)
            .send({
                "status": "fail",
                "massage": "欄位未填寫正確，或無此貼文"
            });
        res.end();
    },
    notFound(req, res){
        res.status(404)
            .send({
                "status": "fail",
                "massage": "無此網站路由"
            });
        res.end();
    }
}

module.exports = http;