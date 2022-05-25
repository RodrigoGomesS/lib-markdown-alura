import chalk from 'chalk';
import fs from 'fs';

function tratamentoErro(erro) {
    throw new Error(chalk.red(erro.code, 'Erro no caminho do diretório'));
}

async function leitura(caminho) {
    try {
        const encoding = 'utf8';
        const texto = await fs.promises.readFile(caminho, encoding);
        console.log(chalk.green(texto));
    }catch(erro){
        tratamentoErro(erro);
    }finally{
        console.log(chalk.blue('Concluído!'));
    }
    
}

leitura('./arquivos/texto1.md');