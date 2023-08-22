import React, { useEffect, useRef, useState } from 'react';
import styled from "styled-components";
import { useConnect } from "../../../api/contracts";
import { Card, Button, Descriptions, message, Form, List, Input, notification } from 'antd';
import { getContractByName, getContractByContract } from "../../../api/connectContract";
import { dealMethod, viewMethod } from "../../../utils/contractUtil"
import user3 from "../../../imgs/user3.png";
import { useNavigate } from "react-router-dom";
import judgeStatus from "../../../utils/judgeStatus";
import DisManageStyle from "./style"