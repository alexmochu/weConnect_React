import "jsdom-global/register";
import React from "react";
import expect from "expect";
import Adapter from "enzyme-adapter-react-16";
import Enzyme, { mount, shallow } from "enzyme";
import { Provider } from "react-redux";

global.React = React;
global.expect = expect;
global.Adapter = Adapter;
global.Enzyme = Enzyme;
global.mount = mount;
global.shallow = shallow;
global.Provider = Provider;
