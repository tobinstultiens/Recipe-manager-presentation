<template>
	<v-container fill-height fluid>
		<v-row align="center" justify="center">
			<v-col></v-col>
			<v-col cols="3" sm="4">
				<v-card class="elevation-12">
					<v-toolbar color="primary" dark flat>
						<v-toolbar-title>Register form</v-toolbar-title>
						<v-spacer></v-spacer>
						<v-tooltip top>
							<template v-slot:activator="{ on }">
								<v-btn icon large to="/login" v-on="on">
									<v-icon>mdi-account-plus</v-icon>
								</v-btn>
							</template>
							<span>Register</span>
						</v-tooltip>
					</v-toolbar>
					<v-card-text>
						<v-form ref="register">
							<v-text-field
								label="Name"
								name="name"
								prepend-icon="mdi-account"
								v-model="form.name"
								type="text"
								:rules="usernameRules"
								required
							></v-text-field>

							<v-text-field
								label="Email"
								name="email"
								prepend-icon="mdi-account"
								v-model="form.email"
								type="text"
								:rules="emailRules"
								required
							></v-text-field>

							<v-text-field
								id="password"
								label="Password"
								name="password"
								prepend-icon="mdi-lock"
								v-model="form.password"
								type="password"
								:rules="passwordRules"
								required
							></v-text-field>

							<v-text-field
								id="confirmPassword"
								label="Confirm Password"
								name="confirmPassword"
								prepend-icon="mdi-lock"
								v-model="form.confirmPassword"
								type="password"
								:rules="[passwordRules, passwordConfirmRule]"
								required
							></v-text-field>
						</v-form>
					</v-card-text>
					<v-card-actions>
						<v-spacer></v-spacer>
						<v-btn @click="submit">Register</v-btn>
					</v-card-actions>
				</v-card>
				<v-overlay :value="overlay">
					<i class="fa-5x fas fa-spinner fa-pulse"></i>
				</v-overlay>
				<v-dialog v-model="dialog" width="500">
					<v-card>
						<v-card-title class="headline" primary-title
							>Something went wrong!</v-card-title
						>
						<v-card-text>{{ this.dialogInfo }}</v-card-text>
						<v-divider></v-divider>
						<v-card-actions>
							<v-spacer></v-spacer>
							<v-btn color="primary" text @click="dialog = false"
								>I understand</v-btn
							>
						</v-card-actions>
					</v-card>
				</v-dialog>
			</v-col>
			<v-col></v-col>
		</v-row>
	</v-container>
</template>

<script lang="ts">
import firebase from "firebase";
import Vue from "vue";

export default Vue.extend({
	name: "Register" as string,
	data() {
		return {
			form: {
				email: "",
				password: "",
				name: "",
				confirmPassword: ""
			},
			overlay: false,
			dialog: false,
			dialogInfo: null,
			error: "",

			usernameRules: [(v: string) => !!v || "Username is required"],
			emailRules: [
				(v: string) => !!v || "E-mail is required",
				(v: string) => /^(.+)@(.+)+\.(.+)$/.test(v) || "E-mail must be valid"
			],
			passwordRules: [
				(v: string) => !!v || "Password is required",
				// eslint-disable-next-line
			]
		};
	},
	methods: {
		submit() {
			firebase
				.auth()
				.createUserWithEmailAndPassword(this.form.email, this.form.password)
				.then(() => {
					this.$router.replace({ name: "Home" });
				})
				.catch(err => {
					this.error = err.message;
				});
		}
	},
	computed: {
		passwordConfirmRule(): boolean | string {
			return (
				this.form.password === this.form.confirmPassword ||
				"passwords must match"
			);
		}
	}
});
</script>
