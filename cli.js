import { leitura } from './index.js';
import { validaUrls } from './validacao.js';
import chalk from 'chalk';


const caminho = process.argv;

async function processaTexto(caminhoArquivo) {
    const resultado = await leitura(caminhoArquivo[2]);
    if (caminhoArquivo[3] === 'validar') {
        console.log(chalk.yellow('Link validados'), await validaUrls(resultado));
    } else {
        console.log(chalk.yellow('Lista de links: ', resultado));
    }
}

processaTexto(caminho);