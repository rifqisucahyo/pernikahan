import React, { Component } from 'react';
import { TabBar } from 'antd-mobile';
import { Modal, Button, Image } from 'antd';
import { HomeOutlined, HeartOutlined, FieldTimeOutlined, EnvironmentOutlined, MailOutlined } from '@ant-design/icons';
import Cover from './Cover';
import Mempelai from './Mempelai';
import Acara from './Acara';
import Location from './Location';
import Message from './Message';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'cover',
            hidden: false,
            fullScreen: true,
            isModalVisible: true
        };
    }

    componentDidMount() {
        var w = window.innerWidth;

        if(w > 500){
            document.getElementById("root").style.zoom = "140%";
        }
    }

    renderContent(pageText) {
        switch (pageText) {
            case "cover":
                return (
                    <Cover />
                )
                break;
            case "mempelai":
                return (
                    <Mempelai />
                )
                break;
            case "acara":
                return (
                    <Acara />
                )
                break;
            case "Pesan":
                return (
                    <Message />
                )
                break;
            case "lokasi":
                return (
                    <Location />
                )
                break;

            default:
                return (
                    "Not found"
                )
                break;
        }
    }

    handleCancel = () => {
        this.setState({
            isModalVisible: false
        })
    };

    render() {
        return (
            <>
                <div style={this.state.fullScreen ? { position: 'fixed', height: '100%', width: '100%', top: 0 } : { height: 600 }}>
                    <TabBar
                        unselectedTintColor="#949494"
                        tintColor="#33A3F4"
                        barTintColor="white"
                        hidden={this.state.hidden}
                    >
                        <TabBar.Item
                            title="Cover"
                            key="Cover"
                            icon={<HomeOutlined />}
                            selectedIcon={<HomeOutlined />}
                            selected={this.state.selectedTab === 'cover'}
                            // badge={1}
                            onPress={() => {
                                this.setState({
                                    selectedTab: 'cover',
                                });
                            }}
                            data-seed="logId"
                        >
                            {this.renderContent('cover')}
                        </TabBar.Item>
                        <TabBar.Item
                            icon={<HeartOutlined />}
                            selectedIcon={<HeartOutlined />}
                            title="Mempelai"
                            key="Mempelai"
                            // badge={'new'}
                            selected={this.state.selectedTab === 'mempelai'}
                            onPress={() => {
                                this.setState({
                                    selectedTab: 'mempelai',
                                });
                            }}
                            data-seed="logId1"
                        >
                            {this.renderContent('mempelai')}
                        </TabBar.Item>
                        <TabBar.Item
                            icon={<FieldTimeOutlined />}
                            selectedIcon={<FieldTimeOutlined />}
                            title="Acara"
                            key="Acara"
                            dot
                            selected={this.state.selectedTab === 'acara'}
                            onPress={() => {
                                this.setState({
                                    selectedTab: 'acara',
                                });
                            }}
                        >
                            {this.renderContent('acara')}
                        </TabBar.Item>
                        <TabBar.Item
                            icon={<MailOutlined />}
                            selectedIcon={<MailOutlined />}
                            title="Pesan"
                            key="Pesan"
                            selected={this.state.selectedTab === 'Pesan'}
                            onPress={() => {
                                this.setState({
                                    selectedTab: 'Pesan',
                                });
                            }}
                        >
                            {this.renderContent('Pesan')}
                        </TabBar.Item>
                        <TabBar.Item
                            icon={<EnvironmentOutlined />}
                            selectedIcon={<EnvironmentOutlined />}
                            title="Lokasi"
                            key="Lokasi"
                            selected={this.state.selectedTab === 'lokasi'}
                            onPress={() => {
                                this.setState({
                                    selectedTab: 'lokasi',
                                });
                            }}
                        >
                            {this.renderContent('lokasi')}
                        </TabBar.Item>
                    </TabBar>
                </div>

                <Modal title="Protokol Kesehatan" visible={this.state.isModalVisible} onCancel={this.handleCancel} className="modal-protokol" footer={null} width={500}>
                    <div className="text">
                        Acara ini dilaksanakan dengan menerapkan
                    </div>
                    <div className="text bold">
                        PROTOKOL KESEHATAN
                    </div>
                    <div className="text">
                        Sebagai berikut:
                    </div>
                    <div className="image-protokol"></div>

                    <div className="text">
                        Tanpa mengurangi rasa hormat demi mengurangi penyebaran pandemi, mohon untuk tetap mengikuti protokol kesehatan dan datang tepat waktu sesuai dengan jam yang sudah tertera diundangan.
                    </div>

                </Modal>
            </>
        );
    }
}