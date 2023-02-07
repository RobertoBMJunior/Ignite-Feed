import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import {Post} from "./components/Post";
import "./global.css";
import styles from './App.module.css'

const posts = [
  {
    id: 1,
    author:{
      avatarUrl: 'https://github.com/RobertoBMJunior.png',
      name: 'Roberto Barbosa de Melo Júnior',
      role: 'WEB Developer',  
    },
    content: [
      {type: 'paragraph', content:'Fala galera!!'},
      {type: 'paragraph', content:'Acabei de subir mais um projeto no GitHub. O projeto se chama Ignite Feed. 🚀'},
      {type: 'link', content:'👉 Ignite Feed'}
    ],
    publishedAt: new Date('2023-02-01 16:17:50')
  },

  {
    id: 2,
    author:{
      avatarUrl: 'https://github.com/maykbrito.png',
      name: 'Mayk Brito',
      role: 'Professor',
    },
    content: [
      {type: 'paragraph', content:'Eae Pessoal!!'},
      {type: 'paragraph', content:'Muito legal o projeto do Roberto.'},
      {type: 'link', content:'👉 Ignite Feed'}
    ],
    publishedAt: new Date('2023-02-02 10:27:20')
  },
]

const ei = posts.map(post => {
  return 1;
})

export function App() {
  return (
    <div>
      <Header/>  
      
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          {posts.map(post => {
            return (
            <Post
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
            )
          })}
        </main>
      </div>
      
    </div>

  )
}

