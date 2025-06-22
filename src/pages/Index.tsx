import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Calendar,
  Clock,
  MapPin,
  Heart,
  Flower,
  Users,
  Camera,
  Gift,
  CalendarDays,
  PartyPopper,
  Landmark,
  Mic,
} from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sage-50 via-cream-50 to-sage-100 relative overflow-hidden">
      {/* Animated Pampas Background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Left side pampas */}
        <div className="absolute -left-16 top-20 w-8 h-80 opacity-30">
          <div
            className="w-full h-full bg-gradient-to-t from-sage-600 via-sage-400 to-sage-200 rounded-t-full transform rotate-12 animate-[sway_6s_ease-in-out_infinite] shadow-lg"
            style={{ clipPath: "ellipse(40% 100% at 50% 100%)" }}
          ></div>
          <div
            className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-12 h-16 bg-gradient-to-t from-sage-300 to-transparent rounded-full opacity-60"
            style={{ clipPath: "ellipse(60% 100% at 50% 100%)" }}
          ></div>
          <div
            className="absolute -top-2 left-1/3 w-8 h-12 bg-gradient-to-t from-sage-200 to-transparent rounded-full opacity-40"
            style={{ clipPath: "ellipse(70% 100% at 50% 100%)" }}
          ></div>
        </div>

        <div className="absolute -left-8 top-60 w-6 h-60 opacity-25">
          <div
            className="w-full h-full bg-gradient-to-t from-cream-600 via-cream-400 to-cream-200 rounded-t-full transform -rotate-8 animate-[sway_8s_ease-in-out_infinite_reverse] shadow-md"
            style={{ clipPath: "ellipse(45% 100% at 50% 100%)" }}
          ></div>
          <div
            className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-10 h-14 bg-gradient-to-t from-cream-300 to-transparent rounded-full opacity-50"
            style={{ clipPath: "ellipse(65% 100% at 50% 100%)" }}
          ></div>
        </div>

        <div className="absolute -left-20 bottom-40 w-10 h-70 opacity-20">
          <div
            className="w-full h-full bg-gradient-to-t from-sage-700 via-sage-500 to-sage-300 rounded-t-full transform rotate-15 animate-[sway_7s_ease-in-out_infinite] shadow-lg"
            style={{ clipPath: "ellipse(35% 100% at 50% 100%)" }}
          ></div>
          <div
            className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-14 h-18 bg-gradient-to-t from-sage-400 to-transparent rounded-full opacity-70"
            style={{ clipPath: "ellipse(55% 100% at 50% 100%)" }}
          ></div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-sage-200 to-cream-200 py-16 px-4 z-10">
        <div className="absolute inset-0 bg-[url('/Pampa.jpg')] bg-cover bg-center opacity-20"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <Heart className="w-12 h-12 text-sage-600 animate-pulse" />
          </div>
          <h1 className="font-playfair text-5xl md:text-7xl font-bold text-sage-800 mb-4">Anaïs & Nicolas</h1>
          <p className="font-sans text-xl md:text-2xl text-sage-700 mb-8">Vous invitent à célébrer leur mariage</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12 relative z-10">
        {/* Programme de la journée */}
        <div className="mb-16 animate-fade-in">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-4xl font-bold text-sage-800 mb-4">Programme des journées</h2>
            <div className="flex justify-center">
              <Separator className="w-24 bg-sage-300" />
            </div>
          </div>

          {/* Cérémonie Civile */}

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white/80 backdrop-blur border-sage-200 shadow-lg hover:shadow-xl transition-all duration-300 text">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-sage-100 p-3 rounded-full mr-4">
                    <Heart className="w-6 h-6 text-sage-600" />
                  </div>
                  <div>
                    <h3 className="font-playfair text-2xl font-semibold text-sage-800">Cérémonie Civile</h3>
                    <p className="text-sage-600 font-sans">Hôtel de ville - Rennes</p>
                  </div>
                </div>

                <div className="space-y-4 text-sage-700">
                  {/* Date */}
                  <div className="flex items-center">
                    <CalendarDays className="w-5 h-5 mr-3 text-sage-500" />
                    <span className="font-sans">Vendredi 29 août 2025</span>
                  </div>

                  {/* Lieu */}
                  <div className="flex items-start">
                    <Landmark className="w-5 h-5 mr-3 text-sage-500 mt-0.5" />
                    <div className="font-sans">
                      <p>Mairie de Rennes</p>
                      <p className="text-sm text-sage-500">Place de la Mairie, 35000 Rennes</p>
                    </div>
                  </div>

                  {/* Heure */}
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 mr-3 text-sage-500" />
                    <span className="font-sans">Rendez-vous à 15h15</span>
                  </div>
                  <div className="flex items-center">
                    <PartyPopper className="w-5 h-5 mr-3 text-sage-500" />
                    <span className="font-sans">Début de cérémonie à 15h30</span>
                  </div>

                  {/* Liens de navigation */}
                  <div className="mt-4 space-y-2 text-sm font-sans">
                    <a
                      href="https://maps.app.goo.gl/Zp1u9umYh5TPnwqf7"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center hover:underline"
                    >
                      <MapPin className="w-5 h-5 mr-2 text-sage-500" />
                      <span className="text-sage-500">Ouvrir Google Maps</span>
                    </a>
                    <a
                      href="waze://?ll=48.11146360,-1.68012380&navigate=yes"
                      className="flex items-center hover:underline"
                    >
                      <MapPin className="w-5 h-5 mr-2 text-sage-500" />
                      <span className="text-sage-500">Ouvrir dans Waze</span>
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Cérémonie Laïque */}
            <Card className="bg-white/80 backdrop-blur border-sage-200 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-sage-100 p-3 rounded-full mr-4">
                    <Heart className="w-6 h-6 text-sage-600" />
                  </div>
                  <div>
                    <h3 className="font-playfair text-2xl font-semibold text-sage-800">Cérémonie Laïque</h3>
                    <p className="text-sage-600 font-sans">Un moment d’émotion en plein air</p>
                  </div>
                </div>

                <div className="space-y-4 text-sage-700">
                  {/* Date */}
                  <div className="flex items-center">
                    <CalendarDays className="w-5 h-5 mr-3 text-sage-500" />
                    <span className="font-sans">Samedi 30 août 2025</span>
                  </div>

                  {/* Lieu */}
                  <div className="flex items-start">
                    <Landmark className="w-5 h-5 mr-3 text-sage-500 mt-0.5" />
                    <div className="font-sans">
                      <p>Domaine du Pont Sée</p>
                      <p className="text-sm text-sage-500">17 - 19 Le Pont Sée, 35850 Romillé</p>
                    </div>
                  </div>

                  {/* Programme : accueil */}
                  <div className="flex items-center">
                    <Users className="w-5 h-5 mr-3 text-sage-500" />
                    <span className="font-sans">15h30 — Accueil des invité·es</span>
                  </div>

                  {/* Programme : cérémonie */}
                  <div className="flex items-center">
                    <PartyPopper className="w-5 h-5 mr-3 text-sage-500" />
                    <span className="font-sans">16h00 — Début de cérémonie</span>
                  </div>
                  {/* Liens de navigation */}
                  <div className="mt-4 space-y-2 text-sm font-sans">
                    <a
                      href="https://maps.app.goo.gl/2ewt7FpHiEvnbSkK6"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center hover:underline"
                    >
                      <MapPin className="w-5 h-5 mr-2 text-sage-500" />
                      <span className="text-sage-500">Ouvrir Google Maps</span>
                    </a>
                    <a
                      href="waze://?ll=48.23683880,-1.89718800&navigate=yes"
                      className="flex items-center hover:underline"
                    >
                      <MapPin className="w-5 h-5 mr-2 text-sage-500" />
                      <span className="text-sage-500">Ouvrir dans Waze</span>
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur border-sage-200 shadow-lg">
              <CardContent className="p-8">
                <h3 className="font-playfair text-2xl font-bold text-sage-800 mb-4 flex items-center">
                  <Camera className="w-6 h-6 mr-3 text-sage-600" />
                  Photos
                </h3>
                <p className="text-sage-700 font-sans text-sm mb-4 text-center">
                  Un photographe sera présent pendant l'évènement.
                  <br />
                  Un moment sera dédié aux photos après la cérémonie.
                  <br />
                  N'hésitez pas à prendre vos propres photos dans la journée et à les partager aux mariés !
                </p>
              </CardContent>
            </Card>
            {/* Cocktail */}
            <Card className="bg-white/80 backdrop-blur border-sage-200 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-cream-100 p-3 rounded-full mr-4">
                    <Users className="w-6 h-6 text-sage-600" />
                  </div>
                  <div>
                    <h3 className="font-playfair text-2xl font-semibold text-sage-800">Cocktail</h3>
                    <p className="text-sage-600 font-sans">Vin d'honneur</p>
                  </div>
                </div>
                <div className="space-y-3 text-sage-700">
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 mr-3 text-sage-500" />
                    <span className="font-sans">18h00 - 20h00</span>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 mr-3 text-sage-500 mt-0.5" />
                    <div className="font-sans">
                      <p>Terrasse du Domaine</p>
                      <p className="text-sm text-sage-500">Profitez également du cadre et des jeux extérieurs</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Dîner */}
            <Card className="bg-white/80 backdrop-blur border-sage-200 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-sage-100 p-3 rounded-full mr-4">
                    <Flower className="w-6 h-6 text-sage-600" />
                  </div>
                  <div>
                    <h3 className="font-playfair text-2xl font-semibold text-sage-800">Dîner</h3>
                    <p className="text-sage-600 font-sans">Le plaisir des papilles, en toute simplicitéNP</p>
                  </div>
                </div>
                <div className="space-y-3 text-sage-700">
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 mr-3 text-sage-500" />
                    <span className="font-sans">20h00</span>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 mr-3 text-sage-500 mt-0.5" />
                    <div className="font-sans">
                      <p>Salle de réception</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Soirée */}
            <Card className="bg-white/80 backdrop-blur border-sage-200 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-cream-100 p-3 rounded-full mr-4">
                    <Heart className="w-6 h-6 text-sage-600" />
                  </div>
                  <div>
                    <h3 className="font-playfair text-2xl font-semibold text-sage-800">Soirée dansante</h3>
                    <p className="text-sage-600 font-sans">Fiesta jusqu'au bout de la nuit</p>
                  </div>
                </div>
                <div className="space-y-3 text-sage-700">
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 mr-3 text-sage-500" />
                    <span className="font-sans">à partir de minuit</span>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 mr-3 text-sage-500 mt-0.5" />
                    <div className="font-sans">
                      <p>Rejoignez les mariés sur la piste de danse</p>
                      <p className="text-sm text-sage-500">Préparer vos plus beaux déhanchés</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Photo */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Liste Mariage */}
          <Card className="bg-white/80 backdrop-blur border-sage-200 shadow-lg">
            <CardContent className="p-8">
              <h3 className="font-playfair text-2xl font-bold text-sage-800 mb-4 flex items-center">
                <Gift className="w-6 h-6 mr-3 text-sage-600" />
                Liste de mariage
              </h3>
              <p className="text-sage-700 font-sans text-sm mb-4">
                Pas de liste. Votre présence est le plus beau des cadeaux.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Contact */}
        <div className="text-center mt-16 p-8 bg-sage-100/50 rounded-2xl">
          <h3 className="font-playfair text-2xl font-bold text-sage-800 mb-4">Une question ?</h3>
          <p className="text-sage-700 font-sans mb-4">
            N'hésitez pas à nous contacter pour toute information complémentaire
          </p>
          <div className="flex justify-center space-x-8 text-sage-600">
            <div>
              <p className="font-semibold">Anaïs</p>
              <p className="text-sm">06 58 10 10 55</p>
            </div>
            <div>
              <p className="font-semibold">Nicolas</p>
              <p className="text-sm">06 50 01 36 97</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
