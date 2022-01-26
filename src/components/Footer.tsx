import { NextPage } from "next"
import * as React from "react"
import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import { CSSProperties, FunctionComponent } from 'react'

import styles from "../styles/components/Footer.module.scss"


//Base Webの読み込み


const Footer: FunctionComponent = () => {
    return (
    <div>
    <footer className={styles.footer}>
        <div>
            <small>© 2022 Go5 lab.</small>
        </div>
        <div>
            <Link href="https://github.com/nnmykn/mystatus/">
                <a className={styles.link}>GitHub</a>
            </Link>
            <Link href="https://go5.run/">
                <a className={styles.link}>Our Team</a>
            </Link>
            <Link href="/terms-of-use">
                <a className={styles.link}>Terms</a>
            </Link>
        </div>
    </footer>
    </div>
  )
}
export default Footer