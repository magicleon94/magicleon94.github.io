import 'package:flutter/material.dart';
import 'package:url_launcher/url_launcher.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Antonello Galipò',
      theme: ThemeData(
        primarySwatch: Colors.blue,
        visualDensity: VisualDensity.adaptivePlatformDensity,
      ),
      home: HomePage(),
    );
  }
}

class HomePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Center(
      child: Container(
        width: MediaQuery.of(context).size.width * 0.5,
        height: MediaQuery.of(context).size.height * 0.6,
        child: Card(
          child: Material(
            child: Padding(
              padding: const EdgeInsets.all(16.0),
              child: Row(
                children: [
                  Expanded(
                    flex: 2,
                    child: Column(
                      children: [
                        Container(
                          margin: EdgeInsets.only(bottom: 16),
                          child: ClipRRect(
                            borderRadius: BorderRadius.circular(300),
                            child: Image.network(
                              'https://avatars1.githubusercontent.com/u/5605705?s=460&u=7f4baec3c6d28e1dc14e8c09c53eec9309738b79&v=4',
                            ),
                          ),
                        ),
                        Text(
                          'Antonello Galipò',
                          textAlign: TextAlign.center,
                          style: Theme.of(context).textTheme.headline6,
                        ),
                      ],
                    ),
                  ),
                  Spacer(
                    flex: 1,
                  ),
                  Expanded(
                    flex: 5,
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Expanded(
                          flex: 1,
                          child: Column(
                            mainAxisAlignment: MainAxisAlignment.spaceAround,
                            children: [
                              Text(
                                'Personal information',
                                style: Theme.of(context).textTheme.headline5,
                              ),
                              Text('Flutter developer at Crispy Bacon Srl'),
                            ],
                          ),
                        ),
                        Spacer(
                          flex: 1,
                        ),
                        Expanded(
                          flex: 6,
                          child: Column(
                            crossAxisAlignment: CrossAxisAlignment.start,
                            children: [
                              Expanded(
                                flex: 1,
                                child: Text(
                                  'Contacts',
                                  style: Theme.of(context).textTheme.headline5,
                                ),
                              ),
                              Expanded(
                                flex: 7,
                                child: Column(
                                  children: [
                                    ContactInfo(
                                      'Mail',
                                      'antonello.galipo@gmail.com',
                                      'mailto:antonello.galipo@gmail.com',
                                    ),
                                    ContactInfo('Instagram', 'magicleon94',
                                        'https://www.instagram.com/magicleon94/'),
                                    ContactInfo('Linkedin', 'antonello-galipò',
                                        'https://www.linkedin.com/in/antonello-galipò/'),
                                    ContactInfo('StackOverflow', 'magicleon94',
                                        'https://stackoverflow.com/users/3626078/magicleon'),
                                    ContactInfo('Medium', 'magicleon94',
                                        'https://medium.com/@magicleon94'),
                                  ],
                                ),
                              ),
                            ],
                          ),
                        ),
                      ],
                    ),
                  )
                ],
              ),
            ),
          ),
        ),
      ),
    );
  }
}

class ContactInfo extends StatelessWidget {
  final String title;
  final String content;
  final String link;

  const ContactInfo(this.title, this.content, [this.link]);
  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.symmetric(vertical: 8.0),
      child: Row(
        children: [
          Text(
            '$title: ',
            style: Theme.of(context).textTheme.bodyText1,
          ),
          GestureDetector(
            behavior: HitTestBehavior.opaque,
            onTap: link != null ? () => launch(link) : null,
            child: Text(
              '$content',
              style: Theme.of(context)
                  .textTheme
                  .bodyText2
                  .copyWith(color: Colors.blue),
            ),
          ),
        ],
      ),
    );
  }
}
