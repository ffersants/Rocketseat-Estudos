import { RepositoryItem } from "./RepositoryItem.jsx";

export function RepositoryList(){
    return(
        <section className="repo-list">
            <ul>
                <RepositoryItem repoName="Siscoffee" />
                <RepositoryItem repoName="Selenium" />
                <RepositoryItem repoName="Origamid" />
            </ul>
        </section>
    )
}