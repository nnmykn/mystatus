import * as React from "react"

import { NextPage } from "next"
import Link from "next/link"
import Head from "next/head"
import Script from 'next/script'


import styles from "../styles/top.module.scss"

import { Notification, KIND } from "baseui/notification"

const url = "https://ipinfo.io?callback"
const Page = () => {
    // get ip
    const [ip, setIp] = React.useState(0);
    React.useEffect(() => {
        fetch(url)
        .then((r) => r.json())
        .then((j) => setIp(j.ip));
    }, []);
    // get city
    const [city, setCity] = React.useState(0);
    React.useEffect(() => {
        fetch(url)
        .then((r) => r.json())
        .then((j) => setCity(j.city));
    }, []);
    // get region
    const [region, setRegion] = React.useState(0);
    React.useEffect(() => {
        fetch(url)
        .then((r) => r.json())
        .then((j) => setRegion(j.region));
    }, []);
    // get hostname
    const [hostname, setHostname] = React.useState(0);
    React.useEffect(() => {
        fetch(url)
        .then((r) => r.json())
        .then((j) => setHostname(j.hostname));
    }, []);
    // get org
    const [org, setOrg] = React.useState(0);
    React.useEffect(() => {
        fetch(url)
        .then((r) => r.json())
        .then((j) => setOrg(j.org));
    }, []);
    return (
        <div>
            <Head>
                <link rel="canonical" href="https://status.go5.run/ja/"/>
                <title key="site:title">MyStatus | 👣Displays the information published by your browser</title>
            </Head>
            <main className={styles.main}>
                <div className={styles.notify}>
                    <Notification  kind={KIND.warning}>
                        {() => "これは開発中のデモ版です。基本的には正常に動作しません。"}
                    </Notification>
                </div>
                <div className={styles.notify}>
                <Notification  kind={KIND.warning}>
                    {() => "アドブロックを使用しているとIPaddressなどが正常に表示されない場合があります。"}
                </Notification>
                </div>
                <div className={styles.notify}>
                    <Notification kind={KIND.negative}>
                        {() => "短時間に何度もリロードすると、グローバルIPが表示されなくなる問題があります :("}
                    </Notification>
                </div>
                <Link href="mailto:hi@kan.run"><a>
                    <button className={styles.button}><span>Contact</span></button>
                </a></Link>
                <div></div>
                <div id="ip" className={styles.ip}><h1>あなたのグローバルIP: {ip}</h1></div>
                <div id="ip" className={styles.ip}><h1>あなたの地域: {region}</h1></div>
                <div id="ip" className={styles.ip}><h1>あなたの街: {city}</h1></div>
                <div id="ip" className={styles.ip}><h1>あなたのホストネーム: {hostname}</h1></div>
                <div id="ip" className={styles.ip}><h1>プロバイダー: {org}</h1></div>
                <div id="information" className={styles.info}></div>
            </main>
            <Script src="/js/info-jp.js" strategy="afterInteractive"/>
        </div>
    )
}


export default Page