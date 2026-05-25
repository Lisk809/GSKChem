<template>
  <div class="card-panel login-container">
    <div class="login-header">
      <div class="logo-icon login-logo"><img class="logo-icon" src="/logo.jpg" /></div>
      <h2>欢迎回到 GSKChem</h2>
      <p>使用邮箱或QQ账号登录幻想乡</p>
    </div>

    <form @submit.prevent="handleLogin">
      <div class="input-group">
        <i class="fas fa-envelope"></i>
        <input
          type="text"
          v-model="form.username"
          placeholder="邮箱 / QQ号"
          autocomplete="username"
        />
      </div>

      <div class="input-group">
        <i class="fas fa-lock"></i>
        <input
          :type="showPassword ? 'text' : 'password'"
          v-model="form.password"
          placeholder="密码"
          autocomplete="current-password"
        />
        <i
          :class="showPassword ? 'fas fa-eye-slash' : 'fas fa-eye'"
          class="toggle-pwd"
          @click="showPassword = !showPassword"
        ></i>
      </div>

      <div class="options">
        <label class="checkbox"> <input type="checkbox" v-model="rememberMe" /> 记住我 </label>
        <a href="#" class="forgot-link">忘记密码？</a>
      </div>

      <button type="submit" class="auth-nav-btn login-btn">
        <i class="fas fa-arrow-right-to-bracket"></i> 登录
      </button>

      <div class="register-tip">
        还没有账号？ <router-link to="/register">立即注册</router-link>
      </div>
    </form>

    <div class="demo-note">
      <i class="fas fa-flask"></i> 演示模式 · 任意邮箱/密码均可登录（不校验后端）
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const form = reactive({ username: "", password: "" });
const rememberMe = ref(false);
const showPassword = ref(false);

const handleLogin = () => {
  // 仅做前端简单非空验证，不请求后端
  if (!form.username.trim() || !form.password.trim()) {
    alert("请填写邮箱/QQ号和密码");
    return;
  }
  // 模拟登录成功（后端暂未接入）
  alert(`演示登录成功！\n欢迎回来，${form.username}`);
  // 登录成功后跳转到主页（可自定义）
  router.push("/");
};
</script>

<style scoped>
.login-container {
  max-width: 500px;
  margin: 2rem auto;
  padding: 2rem 2rem 2rem 2rem;
}
.login-header {
  text-align: center;
  margin-bottom: 2rem;
}
.login-logo {
  margin: 0 auto 1rem auto;
  width: 60px;
  height: 60px;
  font-size: 2rem;
}
.login-header h2 {
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
  color: #1c5a2d;
}
.login-header p {
  color: #4a6e4d;
}
.input-group {
  display: flex;
  align-items: center;
  background: var(--bg-body);
  border-radius: 2.5rem;
  padding: 0.6rem 1.2rem;
  margin-bottom: 1.2rem;
  border: 1px solid #cfdec4;
  transition: 0.2s;
}
.input-group:focus-within {
  border-color: #2b6e3c;
  box-shadow: 0 0 0 3px rgba(43, 110, 60, 0.2);
}
.input-group i:first-child {
  color: #7a9f6e;
  width: 1.8rem;
  font-size: 1.1rem;
}
.input-group input {
  flex: 1;
  border: none;
  outline: none;
  font-size: 1rem;
  font-family: "Inter", sans-serif;
  background: transparent;
}
.toggle-pwd {
  cursor: pointer;
  color: #7a9f6e;
  margin-left: 0.5rem;
}
.options {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0.8rem 0 1.5rem;
  font-size: 0.9rem;
}
.checkbox {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  color: #3c5e3f;
  cursor: pointer;
}
.forgot-link {
  color: #2b6e3c;
  text-decoration: none;
}
.forgot-link:hover {
  text-decoration: underline;
}
.login-btn {
  width: 100%;
  justify-content: center;
  margin-left: 0;
  font-size: 1rem;
  padding: 0.75rem;
}
.register-tip {
  text-align: center;
  margin-top: 1.5rem;
  font-size: 0.9rem;
}
.register-tip a {
  color: #2b6e3c;
  text-decoration: none;
  font-weight: 600;
}
.demo-note {
  margin-top: 2rem;
  text-align: center;
  font-size: 0.8rem;
  background: var(--bg-body);
  padding: 0.7rem;
  border-radius: 2rem;
  color: #4a6e4d;
}
.login-container .login-btn {
  width: 100%;
  justify-content: center;
}
.login-container .login-btn:hover {
  background: #e2ecdb;
  transform: translateY(-1px);
}
</style>
