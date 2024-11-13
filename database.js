function add(obj){
        if(typeof obj === "object"){
                return obj
        }
        else{
                return false
        }
}

module.exports.add = add
