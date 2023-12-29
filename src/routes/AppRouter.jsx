import { Navigate, Route, Routes } from "react-router-dom"
import { HomePage } from "../pages/HomePage"

export const AppRouter = () => {
    return (
        <Routes>

                <Route path="home" element={ <HomePage /> }/>
                <Route path="soft-skills" element={<HomePage />}/>
                <Route path="projects" element={<HomePage />}/>
                <Route path="contact" element={<HomePage />}/>

                <Route path="/*" element={<Navigate to="home"/>}/>
        </Routes>
    )
}
