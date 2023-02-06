import { ThumbsUp, Trash } from 'phosphor-react'
import { useState } from 'react'
import { Avatar } from './Avatar'
import styles from './Comment.module.css'

interface CommentProps{
    content: string;
    onDeleteComment: (comment: string) => void;
}


export function Comment ({content, onDeleteComment}: CommentProps) {
    const [like, setLike] = useState(0)
    
    function handleDeleteComment () {
        onDeleteComment(content)
    }

    function handleLike () {
        setLike((state) => {
            return state + 1
        })
    }
    

    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/RobertoBMJunior.png" alt=''/>

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Roberto Barbosa de Melo Júnior</strong>
                            <time title="01 de fevereiro às 14:17" dateTime='2022-02-01 14:17:58'>Cerca de 1h</time>
                        </div>

                        <button onClick={handleDeleteComment} title='Deletar comentário'>
                            <Trash size={24}/>
                        </button>
                    </header>

                    <p>{content}</p>
                </div>
                <footer>
                    <button onClick={handleLike}> 
                        <ThumbsUp/>
                        Aplaudir<span>{like}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}