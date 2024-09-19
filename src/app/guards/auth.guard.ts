import { Auth } from "@angular/fire/auth";
import { CanActivateFn, Router, } from "@angular/router";
import { AuthStateService } from "../services/data-access/auth-state.service";
import { map } from "rxjs";
import { inject } from "@angular/core";

export const privateGuard = (): CanActivateFn => {
    return () => {
        const router = inject(Router)
        const authState = inject(AuthStateService)

        return authState.authState$.pipe(
            map((state) => {
                console.log("Estado private donde login",state);
                
                if (!state) {
                    router.navigateByUrl('./auth/login');
                    return false;
                }
                return true;
            })
        )
    }
}

export const publicGuard = (): CanActivateFn => {
    return () => {
        const router = inject(Router)
        const authState = inject(AuthStateService)
        
        return authState.authState$.pipe(
            map((state) => {
                console.log("Estado private donde chat",state);
                if (state) {
                router.navigateByUrl('./chat/ichat');
                return false;
                }
                return true;
            })
        )
    }
}
