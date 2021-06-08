import Article from "./Article";

export default function ArticleList ({posts}) {
    console.log(posts)
    let postArr = posts.map(el => <Article key={el.title} title={el.title} date={el.date} preview={el.preview}/>)
    return(
        <main>
            {postArr}
        </main>
    )
}
