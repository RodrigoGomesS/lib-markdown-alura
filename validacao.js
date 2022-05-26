import fetch from "node-fetch";

function mensagemErro(erro) {
    throw new Error(erro.message);
}

async function checarUrls(arrayUrls) {
    try {
        const arrayStatus = await Promise
            .all(arrayUrls
                .map(async url => {
                    const res = await fetch(url);
                    return res.status;
                }));
        return arrayStatus;
    } catch (erro) {
        mensagemErro(erro);
    }
}

function geraLinks(arraylinks) {
    return arraylinks
        .map(objetoLink => Object
            .values(objetoLink)
            .join());
}

async function validaUrls(arraylinks) {
    const links = geraLinks(arraylinks);
    const statusLinks = await checarUrls(links);
    const resultados = arraylinks
        .map((objeto, indice) => ({
            ...objeto,
            status: statusLinks[indice]
        }));

    return resultados;
}

export { validaUrls };