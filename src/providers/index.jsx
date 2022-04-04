import { PageProvider } from "./currentPage";

const Providers = ({children}) => {
    return(
        <PageProvider>
            {children}
        </PageProvider>
    )
}

export default Providers