import chalk from 'chalk';
import fs from 'fs';

function extrairLinks(texto) {
    const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm;
    const arrayResultados = [];
    let temp;
    while((temp = regex.exec(texto)) !== null){
        arrayResultados.push({[temp[1]]: temp[2]})
    }

    return arrayResultados.length === 0 ? 'Não há links.' :  arrayResultados;
}

function tratamentoErro(erro) {
    throw new Error(chalk.red(erro.code, 'Erro no caminho do diretório'));
}

async function leitura(caminho) {
    try {
        const encoding = 'utf8';
        const texto = await fs.promises.readFile(caminho, encoding);
        return extrairLinks(texto);
    } catch (erro) {
        tratamentoErro(erro);
    } finally {
        console.log(chalk.blue('Concluído!'));
    }

}

export {leitura};