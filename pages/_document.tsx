
import Document, { Html, Head, Main, NextScript } from 'next/document'
import Navbar  from "./index"

export default class CustomDocument extends Document {
    render() {

        return (
            <Html>

                <Head>

                    <title>Sandeep Next App</title>
                    {/* <meta property="custom" content="sandeep verma ,sandeep pabra ,sandeep pabriya ,web, development course near pabra hisar haryana app development course website build full-stack web development , mern stack , sandeep verma parjapat pabra hisar  " /> */}
                    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"></link>
                    
                    
                       </Head>

                <body>
                    <Main />
                </body>
                <NextScript />











            </Html>



        )




    }

}



