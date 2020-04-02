const Return = require("../models/Return");
const Produtores = require("../models/Produtor");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;
module.exports = {
    async getAll(req, res) {
        const resp = await Produtores.findAll({});

        return res.json(Return.sucess("Busca concluida com sucesso", resp));
    },

    async search(req, res) {
        const data = req.body;
        const resp = await Produtores.findAll({
            where: {
                nome: {
                    [Op.substring]: data.nome
                }
            }
        });

        return res.json(Return.sucess("Busca concluida com sucesso", resp));
    },

    async getByID(req, res) {
        const data = req.body;

        const resp = await Produtores.findAll({
            where: {
                id: data.id
            }
        });
        return res.json(Return.sucess("Busca concluida com sucesso", resp));
    },

    async update(req, res) {
        const data = req.body;
        const resp = await Produtores.update(
            {
                nome: data.nome
            },
            {
                where: {
                    id: data.id
                }
            }
        );
        if (resp == 1) {
            return res.json(Return.sucess("Atualizado com sucesso!"));
        } else {
            return res.json(Return.error("Error ao atualizar!"));
        }
    },

    async register(req, res) {
        const data = req.body;

        const resp = await Produtores.create({
            nome: data.nome
        });
        return res.json(Return.sucess("Atualizado com sucesso!", resp));
    },

    async delete(req, res) {
        const data = req.body;

        const resp = await Produtores.destroy({
            where: {
                id: data.id
            }
        });
        if (resp == 1) {
            return res.json(Return.sucess("Deletado com sucesso!"));
        } else {
            return res.json(Return.error("Error ao deletar!"));
        }
    }
};
