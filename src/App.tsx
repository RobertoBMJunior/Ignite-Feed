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
      {type: 'paragraph', content:'Fala galera'},
      {type: 'paragraph', content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content:'👉 robertoBMJunior.design/doctorcare'}
    ],
    publishedAt: new Date('2023-02-02 16:17:50')
  },

  {
    id: 2,
    author:{
      avatarUrl: 'https://github.com/maykbrito.png',
      name: 'Mayk Brito',
      role: 'Professor',
    },
    content: [
      {type: 'paragraph', content:'Ease Pessoal!!'},
      {type: 'paragraph', content:'Finalizei mais um projeto.'},
      {type: 'link', content:'👉 mayk.design'}
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

