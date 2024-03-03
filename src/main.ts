import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { defineComponents, IgcRatingComponent } from "igniteui-webcomponents";
// import 'igniteui-webcomponents/themes/light/bootstrap.css';

defineComponents(IgcRatingComponent);



platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
