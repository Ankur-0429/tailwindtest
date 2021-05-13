import Head from 'next/head'

const TabTitle = ({title}) =>{
    return (
        <Head>
            <title>{title}</title>
            <link rel="icon" href="/Images/logoSmall.jpg" /> 
        </Head>
    )
}

export default TabTitle