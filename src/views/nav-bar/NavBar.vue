<template>
    <b-navbar toggleable="lg" type="dark" variant="info">
        <b-navbar-brand href="#">NavBar</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
            <b-nav-item href="#"><router-link to="/create-scheduling">Agendamento</router-link></b-nav-item>
            <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
                <template v-slot:button-content>
                    <em>Cadastros</em>
                </template>
                <b-dropdown-item>
                    <router-link :to="{name: 'CreatePatient'}">Paciente</router-link>
                </b-dropdown-item>
                <b-dropdown-item>
                    <router-link to="/register/clerk">Atendente</router-link>
                </b-dropdown-item>
                <b-dropdown-item>
                    <router-link to="/register/doctor">Médico</router-link>
                </b-dropdown-item>
                <b-dropdown-item>
                    <router-link to="/register/specialties">Especialidade</router-link>
                </b-dropdown-item>
                <b-dropdown-item>
                    <router-link to="/register/health-insurance">Convênio</router-link>
                </b-dropdown-item>
            </b-nav-item-dropdown>
            <b-nav-item href="#" disabled>Disabled</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
            <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template v-slot:button-content>
                <em>User</em>
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
            </b-nav-item-dropdown>
        </b-navbar-nav>
        </b-collapse>
    </b-navbar>
</template>

<script>
export default {
        
}
</script>