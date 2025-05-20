import { Component} from "@angular/core";
import { NavbarComponent } from "./navbar/navbar.component";

@Component({
    selector: "app-landing-page",
    standalone: true,
    imports: [NavbarComponent],
    template: /*html*/`
    <section>
        <div><app-navbar></app-navbar></div>
        <h1 class="fontAtomicAge">SAKURA RAMEN</h1>
        <h2 class="fontAtomicAge">BEST RAMEN IN TOWN</h2>
    </section>
    `,
    styleUrls: ['./landingPage.component.scss']
})

export class LandingPageComponent {
  
}