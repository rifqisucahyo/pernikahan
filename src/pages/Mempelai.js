import React, { Component } from 'react';
import { Empty, Image } from 'antd';

export default class Cover extends Component {

    render() {
        return (
            <div className="content">
                <Image
                    width={70}
                    src="https://rabi.digital/assets/base/img/bismillah.png"
                />
                <div>
                    <div>
                        Assalamu'alaikum warahmatullahi wabarakatuh
                    </div>
                    <br />
                    <div>
                        Dengan memohon rahmat dan ridho Allah SWT, Kami akan menyelenggarakan resepsi pernikahan Putra-Putri kami :
                        <br />
                        <br />
                    </div>
                </div>
                <Image
                    width={100}
                    className="image-pengangtin"
                    src="https://rabi.digital/assets/users/mIjh78y8ge13b89d99c1a29132e57d2ca/groom.png"
                />
                <div className="mempelai sub-title">
                    Mohammad Rifqi Sucahyo, S.Kom
                </div>
                <div>
                    Putra Pertama dari Bpk Rozikin dan Ibu Rojanatin
                    <br />
                    Pantenan, Panceng, Gresik
                </div>
                <div className="title">
                    <br />
                    dengan
                    <br />
                    <br />
                </div>
                <Image
                    width={100}
                    className="image-pengangtin"
                    src="https://rabi.digital/assets/users/mIjh78y8ge13b89d99c1a29132e57d2ca/bride.png"
                />
                <div className="mempelai sub-title">
                    Fathinul Madiha, S.M
                </div>
                <div>
                    Putri terakhir dari Bpk Khoiri dan Ibu Sakilah
                    <br />
                    Sambogunung, Dukun, Gresik
                </div>
            </div>
        );
    }
}