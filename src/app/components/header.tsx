"use client"
import styles from "@/app/globals.module.css"


export default function Header() {

    return(
        <main className={styles.main}>
            <div className={styles.container}>
                <div className={styles.name}>
                    Nome : <input type="text" className={styles.inputsStyle}/>
                </div>

                <div className={styles.tarefa}>
                    Tarefa : <input type="text" className={styles.inputsStyle}/>
                </div>

                <div className={styles.data}>
                    Data : <input type="text" className={styles.inputsStyle}/>
                </div>

            </div>

        </main>
    )
}