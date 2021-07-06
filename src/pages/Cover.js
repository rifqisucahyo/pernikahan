import React, { Component } from 'react';
import { Input, Image } from 'antd';

export default class Cover extends Component {

    render() {
        return (
            <div className="cover-root">
                {/* <div className="mempelai name-text">
                    Jazaakumullah Khairan
                </div>
                <div className="mempelai wedding-text">
                    atas kehadiran dan do'a restunya
                </div> */}

                <Image
                    width={200}
                    className="image-cover"
                    src="../../pengantin.png"
                />
                <div className="mempelai wedding-text">
                    The Wedding of
                </div>
                <div className="mempelai name-text">
                    Mohammad Rifqi Sucahyo, S.Kom
                </div>
                <div className="mempelai name-text">
                    Fathinul Madiha, S.M
                </div>
            </div>
        );
    }
}