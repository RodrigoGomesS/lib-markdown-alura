import { leitura } from "../index.js";

const arrayResult = [
    {
        FileList: 'https://developer.mozilla.org/pt-BR/docs/Web/API/FileList'
    }
]

describe('leitura::', () => {
    it('deve ser uma função', () => {
        expect(typeof leitura).toBe('function');
    })
    it('deve retornar um array de resultados', async () => {
        const resultado = await leitura('/home/rodrigo-gomes/Desktop/lib-markdown-alura/test/arquivos/texto1.md')
        expect(resultado).toEqual(arrayResult);
    })
    it('deve retornar mensagem "não há links"', async () => {
        const resultado = await leitura('/home/rodrigo-gomes/Desktop/lib-markdown-alura/test/arquivos/texto1_semLink.md')
        expect(resultado).toEqual('Não há links.');
    })
})
