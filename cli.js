import { leitura } from './index.js';
import chalk from 'chalk';

const caminho = process.argv;

async function processaTexto(caminhoArquivo) {
    const resultado = await leitura(caminhoArquivo[2]);
    console.log(chalk.yellow('Lista de links: ', resultado));
}

processaTexto(caminho);