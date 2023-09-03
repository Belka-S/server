import{Q as p,T as a,U as e,V as E,s as o,t,j as i,P as s,W as T,u as g,I as A,Y as C,k as x,Z as L,H as W,N as F,r as $}from"./index-b0910c9a.js";import{e as N,a as B,i as O,b as H}from"./eye-off-fd98a0c4.js";const it=p().shape({name:a().min(4,e.t("Too Short")).max(20,e.t("Too Long")).matches(/^[a-zA-Z0-9_]*$/,e.t("Only letters")).required(e.t("Name Required")),email:a().required(e.t("Email Required")).email(e.t("Invalid Email")),password:a().required(e.t("Password Required")).min(6,e.t("Password Characters"))}),ot=p().shape({email:a().required(e.t("Email Required")).email(e.t("Invalid Email")),password:a().required(e.t("Password Required")).min(6,e.t("Password Characters"))}),st=p().shape({email:a().required(e.t("Email Required")).email(e.t("Invalid Email"))}),nt=p().shape({newPassword:a().required(e.t("Password Required")).min(6,e.t("Password Characters")),confirmPassword:a().required(e.t("Password Required")).min(6,e.t("Password Characters")).oneOf([E("newPassword")],e.t("Must Match"))}),M=o.img`
  position: absolute;
  right: 46px;
  bottom: 11px;
  width: 24px;
  &.left {
    right: 18px;
  }

  @media screen and (min-width: ${t.breakpoints.m}) {
    bottom: 18px;
  }
`;function S({togglePassword:n,passwordShown:d,status:r}){return i.jsx("button",{type:"button",onClick:()=>n(),children:i.jsx(M,{src:d?N:B,alt:"Success Icon",className:r!==""?"right":"left"})})}S.propTypes={togglePassword:s.func.isRequired,passwordShown:s.bool.isRequired,status:s.string.isRequired};const U=o(T)`
  text-decoration: underline;
  color: ${t.colors.accent};
  cursor: pointer;

  &:hover,
  &:focus {
    color: ${t.colors.hovered};
  }
`,V=()=>{const{t:n}=g();return i.jsxs(U,{to:"/forgot",children:[n("Forgot Password"),"?"]})},Z=V,_=o.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  width: 100%;

  color: ${t.colors.textAndIconTodo};
  font-size: ${t.fontSizes.xs};
  font-weight: ${t.fontWeight.sb};
  line-height: normal;

  &.input-error {
    color: ${t.colors.failed};
    font-weight: ${t.fontWeight.r};
  }

  &.input-correct {
    color: ${t.colors.saccess};
    font-weight: ${t.fontWeight.r};
  }

  @media screen and (min-width: ${t.breakpoints.m}) {
    font-size: ${t.fontSizes.s};
  }

  & div {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
`,Q=o.div`
  position: relative;
  width: 100%;
`,Y=o(A)`
  width: 100%;
  padding: 14px;
  padding-right: 44px;

  border-radius: 8px;
  border: 1px solid ${t.colors.placegolderAuth};
  background: ${t.colors.backgroundUserForm};

  color: ${t.colors.textAndIconTodo};
  font-size: ${t.fontSizes.s};
  font-weight: ${t.fontWeight.r};
  line-height: 18px;

  &:hover,
  &:focus {
    border: 1px solid ${t.colors.textAndIconTodo};
  }

  &::placeholder {
    color: ${t.colors.placegolderAuth};
  }

  &#login_password::placeholder {
    font-size: ${t.fontSizes.xs};
    letter-spacing: 4px;
  }

  &.input-error {
    border: 1px solid ${t.colors.failed};
  }

  &.input-correct {
    border: 1px solid ${t.colors.saccess};
  }

  @media screen and (min-width: ${t.breakpoints.m}) {
    padding: 18px;
    font-size: ${t.fontSizes.l};
  }
`,D=o(C)`
  color: #da1414;
  font-size: ${t.fontSizes.xs};
  font-weight: ${t.fontWeight.r};
  line-height: 14px;

  left: 14px;
  bottom: -18px;

  @media screen and (min-width: ${t.breakpoints.m}) {
    font-size: ${t.fontSizes.s};
    left: 18px;
  }
`,G=o.p`
  color: ${t.colors.saccess};
  font-size: ${t.fontSizes.xs};
  font-weight: ${t.fontWeight.r};
  line-height: 14px;

  left: 14px;
  bottom: -18px;

  @media screen and (min-width: ${t.breakpoints.m}) {
    font-size: ${t.fontSizes.s};
    left: 18px;
  }
`,b=o.img`
  position: absolute;
  right: 18px;
  bottom: 11px;
  width: 24px;

  @media screen and (min-width: ${t.breakpoints.m}) {
    bottom: 18px;
  }
`;function J({name:n,title:d,type:r,placeholder:u,id:z,submitCount:w,errors:h,setValidateAfterSubmit:R,values:q}){const[c,v]=x.useState(""),[m,k]=x.useState(!1),{t:f}=g(),P=()=>{k(!m)},y=()=>r==="password"?m?"text":"password":r,j=l=>h[l]?"input-error":(h[l],"input-correct");x.useEffect(()=>{if(w>0){R(!0);const l=j(n);v(l)}},[q,h[n],w]);const I=L().pathname==="/login"&&r==="password";return i.jsxs(_,{htmlFor:n,className:c,children:[i.jsxs("div",{children:[f(d)," ",I&&i.jsx(Z,{})]}),i.jsxs(Q,{children:[i.jsx(Y,{type:y(),name:n,placeholder:f(u),id:z,className:c}),r==="password"&&i.jsx(S,{togglePassword:P,passwordShown:m,status:c}),c==="input-correct"&&i.jsx(b,{src:O,alt:"Success Icon"}),c==="input-error"&&i.jsx(b,{src:H,alt:"Error Icon"})]}),c==="input-correct"&&i.jsx(G,{children:f(`Correct ${n}`)}),i.jsx(D,{name:n,component:"p"})]})}J.propTypes={name:s.string.isRequired,title:s.string.isRequired,type:s.string.isRequired,placeholder:s.string.isRequired,id:s.string.isRequired,validateAfterSubmit:s.bool.isRequired,submitCount:s.number.isRequired,errors:s.object.isRequired,setValidateAfterSubmit:s.func.isRequired,values:s.string.isRequired};const rt=o.div`
  display: flex;
  width: 100%;

  padding: 40px 24px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 32px;

  border-radius: 8px;
  background: ${t.colors.backgroundUserForm};

  @media screen and (min-width: ${t.breakpoints.s}) {
    width: 335px;
  }

  @media screen and (min-width: ${t.breakpoints.m}) {
    width: 480px;
    gap: 40px;
    padding: 40px 40px;
  }
`,at=o.h1`
  color: ${t.colors.accent};
  text-shadow: ${t.shadows.authHeading};
  font-size: ${t.fontSizes.l};
  font-weight: ${t.fontWeight.sb};
  line-height: 24px;

  @media screen and (min-width: ${t.breakpoints.m}) {
    font-size: ${t.fontSizes.xxl};
  }
`,dt=o(W)`
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: 100%;

  @media screen and (min-width: ${t.breakpoints.m}) {
    gap: 48px;
  }
`,ct=o.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;

  @media screen and (min-width: ${t.breakpoints.m}) {
    gap: 18px;
  }
`,lt=o.button`
  display: flex;
  width: 100%;
  padding: 14px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;

  border-radius: 16px;
  background: ${t.colors.accent};
  box-shadow: ${t.shadows.authButton};

  transform: scale(1);
  transition-property: transform;
  transition-duration: ${t.animations.duration};
  transition-timing-function: ${t.animations.cubicBezier};

  color: ${t.colors.white};
  font-size: ${t.fontSizes.s};
  font-weight: ${t.fontWeight.sb};
  line-height: 18px;
  letter-spacing: -0.28px;

  @media screen and (min-width: ${t.breakpoints.m}) {
    padding: 16px;
    font-size: 18px;
  }

  &:hover,
  &:focus {
    transform: scale(1.02);
  }
`,pt=o.img`
  display: inline;
  width: 18px;
  stroke: red;
  fill: red;

  @media screen and (min-width: ${t.breakpoints.m}) {
    width: 20px;
  }
`,K=o(F)`
  color: ${t.colors.accent};
  text-shadow: ${t.shadows.authHeading};
  font-size: ${t.fontSizes.xs};
  font-style: normal;
  font-weight: ${t.fontWeight.sb};
  line-height: 14px;
  text-decoration-line: underline;

  transition-property: color;
  transition-duration: ${t.animations.duration};
  transition-timing-function: ${t.animations.cubicBezier};

  &:hover,
  &:focus {
    color: ${t.colors.hovered};
  }

  @media screen and (min-width: 768px) {
    font-size: ${t.fontSizes.l};
  }
`;function X({formType:n}){const{t:d}=g(),r=n==="register"?$.loginPage:$.registerPage,u=d(n==="register"?"Log In":"Sign up");return i.jsx("div",{children:i.jsx(K,{to:r,children:u})})}X.propTypes={formType:s.string.isRequired};export{J as A,lt as B,rt as C,dt as F,ct as I,at as T,pt as a,X as b,it as c,nt as d,st as e,ot as v};
