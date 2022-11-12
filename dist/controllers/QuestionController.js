"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestionController = void 0;
const questionRepository_1 = require("../repositories/questionRepository");
class QuestionController {
    async getAll(req, res) {
        const list = await questionRepository_1.questionrepo.find();
        return res.json(list);
    }
    async getOne(req, res) {
        const list = await questionRepository_1.questionrepo.find();
        const atual = list.find((o) => o.selected === true);
        if (atual) {
            atual.selected = false;
            await questionRepository_1.questionrepo.save(atual);
        }
        const id = req.params;
        const item = await questionRepository_1.questionrepo.findOne({ where: id });
        if (item) {
            item.selected = true;
            await questionRepository_1.questionrepo.save(item);
        }
        return res.json(item);
    }
    async create(req, res) {
        const { nome, question } = req.body;
        const newitem = questionRepository_1.questionrepo.create({
            nome,
            question,
            selected: false,
        });
        await questionRepository_1.questionrepo.save(newitem);
        return res.json(newitem);
    }
    async update(req, res) {
    }
    async delete(req, res) {
        const item_ = req.params;
        const selected = await questionRepository_1.questionrepo.findOne({ where: item_ });
        if (!selected)
            return;
        await questionRepository_1.questionrepo.remove(selected);
        return res.json('Pergunta Excluida');
    }
}
exports.QuestionController = QuestionController;
