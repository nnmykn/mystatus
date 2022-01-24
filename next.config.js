module.exports = {
    trailingSlash: true,
    env: {
        serviceName: 'MyStatus', //大文字小文字を区別する正式名称
        serviceNamePlain: 'mystatus', //大文字小文字を区別しない正式名称
        serviceDomain: 'status.go5.run', //httpsや語尾の/無しのドメインのみ(例:pennso.com)
        serviceDescription: '👣Displays the information published by your browser', //サービスの説明文を入力
        serviceIcon: 'https://twemoji.maxcdn.com/v/latest/72x72/1f463.png' //サービスのアイコンを指定するためのURL
    }
};