## HELATH PAPS API
๐ ์ํ๊ด๋ฆฌ
```
hp.store.getState(); // data: ๋ฐ์ดํฐ ์ ๋ณด, view: ํ์ด์ง ์ ๋ณด
```

<br/>

๐ state ๊ฐ ์กฐํ
data๋ฅผ ๊ธฐ๋ณธ๊ฐ์ผ๋ก ์กฐํ
```
hp.getState('isLogin'); // true
```

view๋ฅผ ์กฐํํ๊ณ  ์ถ์ผ๋ฉด 2๋ฒ์งธ argument์ view๋ฅผ ์๋ ฅ
```
hp.getState('showAlertOptions', 'view'); // true
```

<br/>

๐ state ๊ฐ ๋ณ๊ฒฝ
```
hp.setState('isLogin', false); // false
```

<br/>

๐ alert
```
hp.alert('message', Options?);
```

```
โก๏ธ Options
type?: 'alert' | 'confirmAlert'
title?: string
confirm?: string
cancel?: string
color?: 'error' | 'info' | 'success' | 'warning'
callbackFunc?: Function
```

<br/>

๐ loading
```
hp.showLoading('message', Options?);
hp.hideLoading(); == hp.showLoading('hide');
```

```
โก๏ธ Options
color?: 'inherit' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning'
disableShrink?: boolean
size?: number | string
thickness?: number
```

<br/>

๐ page ํ์ด์ง ์ด๋
```
hp.showPage(type: 'next' | 'prev);
```

## ํ์
hp = Helth Paps

main color = #66bb6a

<br>

## ๋ผ์
๐ ์คํ์ผ ํ์ผ์ ์ด๋ป๊ฒ ๊ด๋ฆฌํ  ์ง ๋์ค์ ์๊ธฐ (/index.tsx)

๐ ํ์ ๊ฒฐ๊ณผ ์๋ ฅ์ฐฝ ๋๋ฌด ์์ UI ์์  ํ์ํ ๋ฏ (Form/index.tsx)

๐ footer๊ฐ ํ์ํ๊ฐ... ๊ฐค๋ญ์๋ ๋ชจ๋ฅด๊ฒ ๋๋ฐ ์์ดํฐ ์ฌํ๋ฆฌ ๊ธฐ์ค์ผ๋ก ๋ค๋ก๊ฐ๊ธฐ๋  ์์ผ๋ก๊ฐ๊ธฐ๋  ๋ค ๊ตฌํ๋์ด์์

๐ ๋ฉ๋ด ์์ด์ฝ ๋ก๊ณ  ์๊ธฐ๋ฉด ์๋๊บผ๋ ๋ฐ๊ฟ์ ํด๋ฆญ ์ ํ์ผ๋ก ์ด๋ ๋ฐ ์ง๊ธ์ฒ๋ผ ๋๋๊ณ  ๋๋กญ๋ค์ด์ผ๋ก ํ๋๊ฐ
    
    --> ํ์ฌ๋ ๋ก๊ณ  ๋๋ฅด๋ฉด ํ์ผ๋ก ๊ฐ๊ฒ ์ค์ ํด๋. ๋จ, ์๋ ฅ ํ์ด์ง ๊ฐ์ ๊ฒฝ์ฐ ์ฌ์ฉ์๊ฐ ์๋ ฅํ ๊ฐ์ด ์๋ค๋ผ๊ณ  ํ๋ฉด, ์๋ฆผ์ฐฝ ๋์์ '์ด๋ํ์๊ฒ ์ต๋๊น?' ํด์ผ๋ ๋ฏ
