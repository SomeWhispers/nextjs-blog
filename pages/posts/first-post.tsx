import Link from 'next/link'
import Head from 'next/head'
import Layout from '../components/layout'

export default function FirstPost() {
    return (
        <>
            <Layout>
                <Head>
                    <title>First Post</title>
                    {/* <script src="https://connect.facebook.net/en_US/sdk.js" 
                    strategy="lazyonload"
                    onLoad={() =>
                        console.log(`script loaded correctly, window.FB has been populated`)
                    }
                    />*/}
                </Head>
                <h1>Third Post</h1>
                <h1>Second Post</h1>
                <h1>First Post</h1>
            </Layout>
        </>
    );
}