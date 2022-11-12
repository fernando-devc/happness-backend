"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.questionrepo = void 0;
const data_source_1 = require("../data-source");
const Question_1 = require("../entities/Question");
exports.questionrepo = data_source_1.AppDataSource.getRepository(Question_1.Question);
