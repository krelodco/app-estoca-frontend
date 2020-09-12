import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    html, body, #root {
        width: 100%;
        height: 100%;
    }
    * {
        user-select: none;
        ::-webkit-scrollbar-track {
            background-color: #F5F5F5;
        }

        ::-webkit-scrollbar {
            width: 8px;
            background-color: #F5F5F5;
        }

        ::-webkit-scrollbar-thumb {
            background-color: #0ae;
            
            background-image: 
                -webkit-gradient(
                    linear,
                    0 0, 0 100%,
                    color-stop(.5, rgba(255, 255, 255, .2)),
                    color-stop(.5, transparent), 
                    to(transparent)
            );
        }
    }
`
