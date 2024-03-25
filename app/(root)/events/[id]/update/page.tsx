import EventFrom from "@/components/shared/EventFrom";
import { getEventById } from "@/lib/actions/event.actions";
import { IEvent } from "@/lib/database/models/event.model";
import { auth } from "@clerk/nextjs";
import React from "react";

const UptadeEvent = async ({ params: { id } }: { params: { id: string } }) => {
  const { sessionClaims } = auth();
  const userId = sessionClaims?.userId as string;

  const event = (await getEventById(id)) as IEvent;
  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
        <h3 className="wrapper h3-bold text-center sm:text-left">
          Update Event
        </h3>
      </section>
      <div className="wrapper my-8">
        <EventFrom
          userId={userId}
          event={event}
          eventId={event._id}
          type="Update"
        />
      </div>
    </>
  );
};

export default UptadeEvent;
