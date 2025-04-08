import Layout from "../components/Layout"
import Cabecalho from "../components/Cabecalho"
export default function Exemplo() {
    return (
        <Layout titulo="Usando Componentes">
            <Cabecalho titulo="Next.js & React" />
            <Cabecalho titulo="Aprende next na prática" />
        </Layout>
    )
}