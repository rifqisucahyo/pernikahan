import React, { Component } from 'react';
import { Input, Button, Card } from 'antd';
import { MailOutlined } from '@ant-design/icons';
import { List } from 'antd-mobile';

const { TextArea } = Input;
const Item = List.Item;
const Brief = Item.Brief;

const onChange = e => {
    console.log(e);
};


export default class Cover extends Component {


    render() {
        return (
            <div className="content">
                <div>
                    <Card size="small" title="Ucapan & Do'a" style={{  margin: "0 auto" }}>
                        <Input placeholder="Tulis nama" allowClear onChange={onChange} />
                        <br />
                        <br />
                        <TextArea placeholder="Sampaikan pesan & ucapan" allowClear onChange={onChange} />
                        <br />
                        <br />
                        <Button type="primary" shape="round" icon={<MailOutlined />} size={30}>
                            Kirim Ucapan
                        </Button>

                    </Card>


                </div>
                <div>
                    <List renderHeader={() => ''} className="my-list">
                        <Item arrow="horizontal" multipleLine onClick={() => { }}>
                            Title <Brief>Lorem ipsum, atau ringkasnya lipsum, adalah teks standar yang ditempatkan untuk mendemostrasikan elemen grafis atau presentasi visual seperti font, tipografi, dan tata letak</Brief>
                        </Item>
                        <Item arrow="horizontal" multipleLine onClick={() => { }}>
                            Title <Brief>Lorem ipsum, atau ringkasnya lipsum, adalah teks standar yang ditempatkan untuk mendemostrasikan elemen grafis atau presentasi visual seperti font, tipografi, dan tata letak</Brief>
                        </Item>
                        <Item arrow="horizontal" multipleLine onClick={() => { }}>
                            Title <Brief>Lorem ipsum, atau ringkasnya lipsum, adalah teks standar yang ditempatkan untuk mendemostrasikan elemen grafis atau presentasi visual seperti font, tipografi, dan tata letak</Brief>
                        </Item>
                        <Item arrow="horizontal" multipleLine onClick={() => { }}>
                            Title <Brief>Lorem ipsum, atau ringkasnya lipsum, adalah teks standar yang ditempatkan untuk mendemostrasikan elemen grafis atau presentasi visual seperti font, tipografi, dan tata letak</Brief>
                        </Item>
                        <Item arrow="horizontal" multipleLine onClick={() => { }}>
                            Title <Brief>Lorem ipsum, atau ringkasnya lipsum, adalah teks standar yang ditempatkan untuk mendemostrasikan elemen grafis atau presentasi visual seperti font, tipografi, dan tata letak</Brief>
                        </Item>
                        <Item arrow="horizontal" multipleLine onClick={() => { }}>
                            Title <Brief>Lorem ipsum, atau ringkasnya lipsum, adalah teks standar yang ditempatkan untuk mendemostrasikan elemen grafis atau presentasi visual seperti font, tipografi, dan tata letak</Brief>
                        </Item>
                        <Item arrow="horizontal" multipleLine onClick={() => { }}>
                            Title <Brief>Lorem ipsum, atau ringkasnya lipsum, adalah teks standar yang ditempatkan untuk mendemostrasikan elemen grafis atau presentasi visual seperti font, tipografi, dan tata letak</Brief>
                        </Item>
                        <Item arrow="horizontal" multipleLine onClick={() => { }}>
                            Title <Brief>Lorem ipsum, atau ringkasnya lipsum, adalah teks standar yang ditempatkan untuk mendemostrasikan elemen grafis atau presentasi visual seperti font, tipografi, dan tata letak</Brief>
                        </Item>
                        <Item arrow="horizontal" multipleLine onClick={() => { }}>
                            Title <Brief>Lorem ipsum, atau ringkasnya lipsum, adalah teks standar yang ditempatkan untuk mendemostrasikan elemen grafis atau presentasi visual seperti font, tipografi, dan tata letak</Brief>
                        </Item>
                        <Item arrow="horizontal" multipleLine onClick={() => { }}>
                            Title <Brief>Lorem ipsum, atau ringkasnya lipsum, adalah teks standar yang ditempatkan untuk mendemostrasikan elemen grafis atau presentasi visual seperti font, tipografi, dan tata letak</Brief>
                        </Item>
                        <Item arrow="horizontal" multipleLine onClick={() => { }}>
                            Title <Brief>Lorem ipsum, atau ringkasnya lipsum, adalah teks standar yang ditempatkan untuk mendemostrasikan elemen grafis atau presentasi visual seperti font, tipografi, dan tata letak</Brief>
                        </Item>
                        <Item arrow="horizontal" multipleLine onClick={() => { }}>
                            Title <Brief>Lorem ipsum, atau ringkasnya lipsum, adalah teks standar yang ditempatkan untuk mendemostrasikan elemen grafis atau presentasi visual seperti font, tipografi, dan tata letak</Brief>
                        </Item>
                        <Item arrow="horizontal" multipleLine onClick={() => { }}>
                            Title <Brief>Lorem ipsum, atau ringkasnya lipsum, adalah teks standar yang ditempatkan untuk mendemostrasikan elemen grafis atau presentasi visual seperti font, tipografi, dan tata letak</Brief>
                        </Item>
                        <Item arrow="horizontal" multipleLine onClick={() => { }}>
                            Title <Brief>Lorem ipsum, atau ringkasnya lipsum, adalah teks standar yang ditempatkan untuk mendemostrasikan elemen grafis atau presentasi visual seperti font, tipografi, dan tata letak</Brief>
                        </Item>
                        <Item arrow="horizontal" multipleLine onClick={() => { }}>
                            Title <Brief>Lorem ipsum, atau ringkasnya lipsum, adalah teks standar yang ditempatkan untuk mendemostrasikan elemen grafis atau presentasi visual seperti font, tipografi, dan tata letak</Brief>
                        </Item>
                        <Item arrow="horizontal" multipleLine onClick={() => { }}>
                            Title <Brief>Lorem ipsum, atau ringkasnya lipsum, adalah teks standar yang ditempatkan untuk mendemostrasikan elemen grafis atau presentasi visual seperti font, tipografi, dan tata letak</Brief>
                        </Item>
                        <Item arrow="horizontal" multipleLine onClick={() => { }}>
                            Title <Brief>Lorem ipsum, atau ringkasnya lipsum, adalah teks standar yang ditempatkan untuk mendemostrasikan elemen grafis atau presentasi visual seperti font, tipografi, dan tata letak</Brief>
                        </Item>
                        <Item arrow="horizontal" multipleLine onClick={() => { }}>
                            Title <Brief>Lorem ipsum, atau ringkasnya lipsum, adalah teks standar yang ditempatkan untuk mendemostrasikan elemen grafis atau presentasi visual seperti font, tipografi, dan tata letak</Brief>
                        </Item>
                        <Item arrow="horizontal" multipleLine onClick={() => { }}>
                            Title <Brief>Lorem ipsum, atau ringkasnya lipsum, adalah teks standar yang ditempatkan untuk mendemostrasikan elemen grafis atau presentasi visual seperti font, tipografi, dan tata letak</Brief>
                        </Item>
                        <Item arrow="horizontal" multipleLine onClick={() => { }}>
                            Title <Brief>Lorem ipsum, atau ringkasnya lipsum, adalah teks standar yang ditempatkan untuk mendemostrasikan elemen grafis atau presentasi visual seperti font, tipografi, dan tata letak</Brief>
                        </Item>
                        <Item arrow="horizontal" multipleLine onClick={() => { }}>
                            Title <Brief>Lorem ipsum, atau ringkasnya lipsum, adalah teks standar yang ditempatkan untuk mendemostrasikan elemen grafis atau presentasi visual seperti font, tipografi, dan tata letak</Brief>
                        </Item>
                    </List>
                </div>
            </div>
        );
    }
}