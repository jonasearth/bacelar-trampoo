module.exports = {
    sucess(msg, data = []) {
        const retorno = {
            msg,
            error: false,
            data
        };
        return retorno;
    },
    error(msg, data = []) {
        const retorno = {
            msg,
            error: true,
            data
        };
        return retorno;
    }
};
