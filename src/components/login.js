import React, { Component } from "react";
import { Form, Button, Input, Icon, message } from "antd";
import styles from "../less/Login.less";
const FormItem = Form.Item;
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "account"
    };
  }

  componentDidMount() {}

  componentWillMount() {}

  componentDidUpdate() {}

  componentWillReceiveProps() {}

  changeHandle = formData => {};

  handleSubmit = e => {
    e.preventDefault();
    console.log("ene mun uu?");
  };

  render() {
    return (
      <div>
        <div
          style={{
            background: "#f0f2f5",
            width: "100%",
            minHeight: "100%",
            backgroundSize: "100%",
            alignItems: "center",
            verticalAlign: "middle"
          }}
        >
          <div
            style={{
              width: "400px",
              margin: "0 auto",
              padding: "20px",
              background: " #FFF",
              borderRadius: "5px",
              boxShadow: "0px 0px 20px #cecece"
            }}
          >
            <Form onSubmit={this.handleSubmit} className="login-form">
              <FormItem>
                <Input
                  size="large"
                  prefix={<Icon type="user" className={styles.prefixIcon} />}
                  placeholder="Нэвтрэх нэр"
                />
              </FormItem>
              <FormItem>
                <Input
                  size="large"
                  prefix={<Icon type="lock" className={styles.prefixIcon} />}
                  type="password"
                  placeholder="Нууц үг"
                  className={styles.inputs}
                />
              </FormItem>
              <FormItem
                style={{
                  textAlign: "left"
                }}
              >
                <Button
                  size="large"
                  type="primary"
                  htmlType="submit"
                  style={{
                    width: "100%"
                  }}
                >
                  Нэвтрэх
                </Button>
                <a
                  href="/login"
                  size="large"
                  htmlType="submit"
                  style={{
                    width: "100%"
                  }}
                >
                  Бүртгүүлэх
                </a>
              </FormItem>
            </Form>
          </div>
        </div>
        {/* <Footer /> */}
      </div>
    );
  }
}

export default Login;
